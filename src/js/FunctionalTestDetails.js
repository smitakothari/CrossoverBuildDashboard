/**
 * Created by smita on 7/19/2016.
 */

var React = require('react');
var d3 = require('d3').scale;
var PieChart = require('react-d3').PieChart;

var FunctionalTestDetails = React.createClass({

    myColors: function(idx){
        console.log('a');
        return ['Green','Orange'][idx];
    },


    render:function() {
        //var pieData = require('json!../data/pieData.json');

        var pieData = [ {label: 'Pass', value: this.props.functionalTestPass},
            {label: 'Fail', value: this.props.functionalTestFail}]

        return (
            <div className="subRowAlign">
                {this.props.functionalTest !== 'Pending' ?
                    <div className="metricsMainBlock">
                        <div className="subRowAlign">
                            <label>Functional Test</label>
                        </div>
                        <div className="row subRowAlign">
                            <div className="col-sm-6">
                                <PieChart data={pieData} width={100} height={100} radius={25} showOuterLabels={false} colors={this.myColors}/>
                            </div>
                            <div className="col-sm-6 alignPieText">
                                <label>{this.props.functionalTestPercent} tests passed</label>
                            </div>
                        </div>
                        <div className="subRowAlign">
                            <label>{this.props.functionalTestCodeCovered} code covered</label></div>
                    </div>:
                    <div className="metricsMainBlock">
                        <label>Functional Test</label>
                        <div>
                            <label className="optionalBlock">This element is in pending state</label>
                        </div>
                    </div>
                }
            </div>
        );
    }

});
module.exports=FunctionalTestDetails;
