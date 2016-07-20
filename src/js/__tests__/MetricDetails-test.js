/**
 * Created by sapan on 7/19/2016.
 */

jest.dontMock('../MetricDetails.js');

describe('MetricDetailsTest',function(){
    var React = require('react');
    var ReactTestUtils = require('react-addons-test-utils');
    var MetricDetails = require('../MetricDetails.js');;

    it('Optional Div populates for Pending metrics',function() {
        var MetricDetailsElement = ReactTestUtils.renderIntoDocument(
            <MetricDetails metrics="Pending">
            </MetricDetails>
        );
        var Metrictext = ReactTestUtils.findRenderedDOMComponentWithClass(MetricDetailsElement,'optionalBlock');
        expect(Metrictext.textContent).toEqual('This element is in pending state');
    });

    it('Verifies Metrics Security Text',function() {
        var MetricDetailsElement = ReactTestUtils.renderIntoDocument(
            <MetricDetails
                metricsSecurity="MetricsTestData">
            </MetricDetails>
        );
        var Metrictext = ReactTestUtils.findRenderedDOMComponentWithClass(MetricDetailsElement,'securityText');
        expect(Metrictext.textContent).toEqual('Security');
    });

});
