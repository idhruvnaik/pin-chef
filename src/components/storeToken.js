import { getTenantList } from '../services/apiOperations';

const mapDispatchToProps = dispatch => ({
    getAlertsList: (referrer,queryFilterString) => dispatch(getAlertsList(referrer,queryFilterString)),
    getTenantList: (referrer,queryFilterString) => dispatch(getTenantList(referrer,queryFilterString)),
    clearAlertsErrorResponseMessage:()=>dispatch(clearAlertsErrorResponseMessage()),
    clearTenantErrorResponseMessage:()=>dispatch(clearTenantErrorResponseMessage()),
    clearAlertsTable:()=>dispatch(clearAlertsTable())
})

export default connect(mapStateToProps, mapDispatchToProps)(Alerts)