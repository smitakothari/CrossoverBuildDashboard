/**
 * Created by smita on 7/19/2016.
 */

jest.dontMock('../UnitTestDetails.js');

describe('UnitTestDetailsTest',function(){
    var React = require('react');
    var ReactTestUtils = require('react-addons-test-utils');
    var UnitTestDetails = require('../UnitTestDetails.js');;

    it('Optional Div populates for Pending unit test',function() {
        var UnitTestDetailsElement = ReactTestUtils.renderIntoDocument(
            <UnitTestDetails
                unitTest="Pending"
               >
            </UnitTestDetails>
        );
        var UnitTestDetailstext = ReactTestUtils.findRenderedDOMComponentWithClass(UnitTestDetailsElement,'optionalBlock');
        expect(UnitTestDetailstext.textContent).toEqual('This element is in pending state');
    });
});
