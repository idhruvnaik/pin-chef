import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import $ from "jquery";

export default class CropImage extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.makeClientCrop = this.makeClientCrop.bind(this);
    this.getCroppedImg = this.getCroppedImg.bind(this);
    this.onImageLoaded = this.onImageLoaded.bind(this);
    this.onCropChange = this.onCropChange.bind(this);
    this.onCropComplete = this.onCropComplete.bind(this);
    this.send_cropped_image = this.send_cropped_image.bind(this);
    this.state = {
        // src: this.props.image_source,
        pictures: [],
        crop: {
            unit: '%',
            height: this.props.crop_height,
            // width: 1200,
            aspect: 16 / 9,
        },
        otp: {} 
    }

    this.handleChange = otp => {
        this.setState({ otp });
        this.props.onOtpChange(otp);
    };

  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  onImageLoaded(image) {
    this.imageRef = image;
  }

  onCropComplete(crop) {
    this.makeClientCrop(crop);
  };

  onCropChange(crop, percentCrop) {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  send_cropped_image(){
    this.handleChange(this.state.croppedImageUrl);
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        blob.uri = this.fileUrl;
        resolve(blob);
      }, 'image/jpeg');
    });
  }

  render() {
    return (
        <div style={{backgroundColor: "white", borderRadius: "30px", boxShadow: "2px 2px 5px #707070", minHeight: "200px", minWidth: "200px", padding: "10px", overflow: "auto", maxHeight: "650px"}}>
            {this.props.image_source && (
                <ReactCrop
                src={this.props.image_source}
                crop={this.state.crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
                locked={true}
                />
            )}
            {/* <img alt="Crop" style={{ maxWidth: '100%' }} src={this.props.image_source} style={{ display: "none" }} id="feed-crop" /> */}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button style={{marginRight: "0px", backgroundColor: "#469A21", padding: "10px 40px 10px 40px", fontFamily: "custom-fonts-bold", color: "white", borderRadius: "15px"}} onClick={this.send_cropped_image}>OK</button>
            </div>
        </div>
    );
  }
}
