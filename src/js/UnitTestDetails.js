/**
 * Created by sapan on 7/18/2016.
 */

var React = require('react');
var d3 = require('d3').scale;
var PieChart = require('react-d3').PieChart;

var UnitTestDetails = React.createClass({

    myColors: function(idx){
        console.log('a');
        return ['Green','Orange'][idx];
    },


    render:function() {
        //var pieData = require('json!../data/pieData.json');

        var pieData = [ {label: 'Pass', value: this.props.unitTestPass},
            {label: 'Fail', value: this.props.unitTestFail}]

        return (
            <div className="subRowAlign">
                {this.props.unitTest !== 'Pending' ?
                    <div className="metricsMainBlock">
                        <div className="subRowAlign">
                            <label>Unit Test</label>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <PieChart data={pieData} width={100} height={100} radius={25} showOuterLabels={false} colors={this.myColors}/>
                            </div>
                            <div className="col-sm-6 alignPieText">
                                <label>73% tests passed</label>
                            </div>
                        </div>
                        <div className="subRowAlign">
                            <label>76% code covered</label>
                        </div>
                    </div>:
                    <div className="metricsMainBlock">
                        <label>Unit Test</label>
                        <div>
                            <label className="optionalBlock">This element is in pending state</label>
                        </div>
                    </div>}
            </div>
        );
    }

});
module.exports=UnitTestDetails;
