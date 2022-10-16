import React, { memo } from "react";

import { connect } from "react-redux";

function Recommend() {
  return (
    <div>
      <h2>Recommend</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend));
