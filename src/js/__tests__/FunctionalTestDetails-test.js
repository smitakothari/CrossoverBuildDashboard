/**
 * Created by smita on 7/19/2016.
 */

jest.dontMock('../FunctionalTestDetails.js');

describe('FunctionalTestDetailsTest',function(){
    var React = require('react');
    var ReactTestUtils = require('react-addons-test-utils');
    var FunctionalTestDetails = require('../FunctionalTestDetails.js');;

    it('Optional Div populates for Pending functional test',function() {
        var FunctionalTestDetailsElement = ReactTestUtils.renderIntoDocument(
            <FunctionalTestDetails
                functionalTest="Pending">
            </FunctionalTestDetails>
        );
        var FunctionalTestDetailstext = ReactTestUtils.findRenderedDOMComponentWithClass(FunctionalTestDetailsElement,'optionalBlock');
        expect(FunctionalTestDetailstext.textContent).toEqual('This element is in pending state');
    });
});