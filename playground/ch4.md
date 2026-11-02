## props-> properties -> parameter

## component zero or more props

# UD HTML

COMP : NORMAL JS FUNC RETURN JSX/TSX

const Button =()=>{
return <div> </div>
}

// import /export

### import

    1. normal import {} -> normal export
      import {comp} from 'path'
    2. default (named import) without {} / df export
     import comp from 'path'

# export

     1. normal export
       export {comp}
     2. df (named) export
       export default comp;
          Note: only and only one df export

## props-> properties -> parameter

1.  normal props -> any data type, any variable name
    -> <div class ="">
2.  children: data type : "ReactNode", name= children
    -> reserved keyword
    -> btn tags
    <div>. asdkfjaskdfj</div>
    <Test> iafjdkafjd </Test>
