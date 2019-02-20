import React from 'react'
import { binderActionCreators, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, StepChanged } from './counterActions'
const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>

        <input onChange={props.StepChanged} value={props.counter.step} type='number' />
        <button onClick={props.dec} >Dec</button>
        <button onClick={props.inc} >Inc</button>
    </div>
)

const mapStateToProps = state => ({counter: state.counter})
const dispatchToProps = dispatch => bindActionCreators({inc,dec,StepChanged},dispatch )

export default connect(mapStateToProps,dispatchToProps)(Counter)