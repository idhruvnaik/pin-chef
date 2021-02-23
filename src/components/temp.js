<div class="chef-portal">
    <OnboardingChef1 />
    <div class="content">
    {users.map(function(item) {
        if (item.title == "Title 1"){
        return <strong>{item.text}</strong>;
        }
    })}
    </div>
</div>
<div class="chef-portal">
    <OnboardingChef2 />
    <div class="content">
    {users.map(function(item) {
        if (item.title == "Title 2"){
        return <strong>{item.text}</strong>;
        }
    })}
    </div>
</div>
<div class="chef-portal">
    <OnboardingChef3 />
    <div class="content">
    {users.map(function(item) {
        if (item.title == "Title 3"){
        return <strong>{item.text}</strong>;
        }
    })}
    </div>
</div>
<div class="chef-portal">
    <OnboardingChef4 />
    <div class="content">
    {users.map(function(item) {
        if (item.title == "Title 4"){
        return <strong>{item.text}</strong>;
        }
    })}
    </div>
</div>
{/* <div>
    {_renderSkipButton()    }
</div> */}

{/* <div>
    {_renderSkipButton()    }
</div> */}
        {/* <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} scrollbar={{ draggable: false }}>
          <SwiperSlide>
            <div class="chef-portal">
              <OnboardingChef1 />
              <div class="content">
              {users.map(function(item) {
                  if (item.title == "Title 1"){
                  return <strong>{item.text}</strong>;
                  }
              })}
              </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="chef-portal">
              <OnboardingChef1 />
              <div class="content">
              {users.map(function(item) {
                  if (item.title == "Title 1"){
                  return <strong>{item.text}</strong>;
                  }
              })}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div class="chef-portal">
            <OnboardingChef1 />
            <div class="content">
            {users.map(function(item) {
                if (item.title == "Title 1"){
                return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
          </SwiperSlide>
        </Swiper> */}
