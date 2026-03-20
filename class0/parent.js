import square from './square.js'
import circle from './circle.js'

const parentDiv= ()=> {
    return React.createElement('div', {id: 'parent'}, [square(), circle()])
}

export default parentDiv;