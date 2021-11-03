import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';
import * as actions from '../../redux/counter/counter-actions';

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

export default function Counter() {
  const value = useSelector(state => state.counter.value);
  const step = useSelector(state => state.counter.step);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}

// const mapStateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });
// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(actions.increment(value)),
//   onDecrement: value => dispatch(actions.decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
