




import React from 'react'

const ResizableHoc = (WrappedComponent) => {
  return (
    class searchWithHOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                height:this.props.componentData.height || 300,
                width:this.props.componentData.width || 300,
            };
          }

          componentDidMount() {
            console.log(this.props.height)
            this.setState({
                height:this.props.componentData.height ,
                width:this.props.componentData.width
            })
          }
          componentDidUpdate(prevProps, prevState) {
            
            if (prevProps.componentData.height !== this.props.componentData.height || prevProps.componentData.width !== this.props.componentData.width) {
              
            this.setState({
                height:this.props.componentData.height ,
                width:this.props.componentData.width
            })
            }
        }

          handleResizeComponent = (payload) => {
            console.log(payload,'payload')

                this.setState(payload)
          }

          

         
        render() {
          return (
            <>
              <WrappedComponent
              {...this.props}
              {...this.state}
              handleResizeComponent={this.handleResizeComponent}
                />
            </>
          );
        }
    }
  )
}

export default ResizableHoc
