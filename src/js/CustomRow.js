/**
 * Created by smita on 7/17/2016.
 */

var CustomRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.Population}</td>
                <td>{this.props.Zone}</td>
            </tr>
        );
    }
});
