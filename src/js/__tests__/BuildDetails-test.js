/**
 * Created by smita on 7/19/2016.
 */

jest.dontMock('../BuildDetails.js');

describe('BuildDetailsTest',function(){
    var React = require('react');
    var ReactTestUtils = require('react-addons-test-utils');
    var BuildDetails = require('../BuildDetails.js');;

    it('Optional Div populates for Pending build',function() {
        var BuildDetailsElement = ReactTestUtils.renderIntoDocument(
            <BuildDetails
                build="Pending"
                buildReleaseTime="BuildTest2Data">
            </BuildDetails>
        );
        var Buildtext = ReactTestUtils.findRenderedDOMComponentWithClass(BuildDetailsElement,'optionalBlock');
        expect(Buildtext.textContent).toEqual('This element is in pending state');
    });

    it('Verifies Build release time',function() {
        var BuildDetailsElement = ReactTestUtils.renderIntoDocument(
            <BuildDetails
                build="Accepted"
                buildReleaseTime="BuildTest2Data">
            </BuildDetails>
        );
        var Buildtext = ReactTestUtils.findRenderedDOMComponentWithClass(BuildDetailsElement,'buildReleaseTime');
        expect(Buildtext.textContent).toEqual('BuildTest2Data');

    });

});
