/**
 * Created by sapan on 7/19/2016.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var mainHeader = React.createClass({

    render: function () {

        return (
            <div className="container-fluid">
                <div className="page-header">
               <h3 className="pageHeader">Build Dashboard</h3>
                    </div>
            </div>
        );
    }
});

var element = React.createElement(mainHeader, {});
ReactDOM.render(element, document.getElementById('header'));
