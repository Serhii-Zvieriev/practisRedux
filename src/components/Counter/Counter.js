import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
import * as actions from '../../redux/action';

// class Counter extends Component {
// static defaultProps = {
//   initialValue: 0,
// };

// static propTypes = {
//   //
// };

// state = {
//   value: this.props.initialValue,
// };

// handleIncrement = () => {
//   this.setState(prevState => ({
//     value: prevState.value + 1,
//   }));
// };

// handleDecrement = () => {
//   this.setState(prevState => ({
//     value: prevState.value - 1,
//   }));
// };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
}

const mapStateToProps = state => ({ value: state.counterValue });
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment(1)),
  onDecrement: () => dispatch(actions.decrement(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
