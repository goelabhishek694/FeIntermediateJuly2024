import React, { Component } from 'react'

const withLoading = (WrappedComponent) => {
    return class WithLoading extends Component {
        constructor(props){
            super(props);
            this.state={
                isLoading: true
            }
        }

        componentDidMount(){
            //simulating an async operation like fetching data
            setTimeout(()=>{
                this.setState({isLoading:false})
            },2000)
        }
    render() {
        if(this.state.isLoading) {
            return <div>Loading.....</div>
        }
        return (
        <>
            <WrappedComponent {...this.props}/>
        </>
        )
    }
}}

export default  withLoading


// When to Use Higher Order Components
// Code Reusability: When you have logic that needs to be reused across multiple components, HOCs can help avoid code duplication.
// Separation of Concerns: HOCs can encapsulate specific behaviors or logic, making your components more focused on their primary concerns.
// Enhancing Existing Components: When you need to add additional functionality to existing components without modifying them directly.

// When Not to Use Higher Order Components
// Complexity: Overusing HOCs can make the code harder to understand and maintain due to the added layers of abstraction.
// Performance Concerns: Wrapping components in multiple HOCs can sometimes introduce performance issues due to the increased number of renders.

// Conclusion
// HOCs are a powerful tool in React for reusing logic across components. However, they should be used judiciously, considering the complexity and performance implications. With the advent of hooks, many use cases for HOCs can now be achieved more elegantly, so it's essential to evaluate the best approach for your specific scenario.


