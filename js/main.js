//Factory Function
function createCircle(radius){
  return = {
    radius,
    draw: function(){
      console.log('draw')
    }
  }
}
const circle = createCircle(1)


//Constructor Function
function Circle(radius){
  this.radius = radius
  this.draw = function(){
    console.log('draw')
  }
}


Circle.call({}, 1)
Circle.apply({}, [1,2,3])

const another = new Circle(1)


const Circle1 = new Function('radius',`
this.radius = radius
this.draw = function(){
  console.log('draw')
}
`)
const circle = new Circle1(1)


let obj = {value:10}
function increase(obj){
  obj.value++
})
increase(number)
console.log(number) //value:11


function Circle(radius){
  this.radius = radius
  this.draw = function(){
    console.log('draw')
  }
}
const circle = new Circle(10)

circle.location = {x:1}
const propertyName = 'location'
circle['location'] = {x:1}

delete circle.location

for (let key in circle){
  if (typeof circle[key] !== 'function')
  console.log(key, circle[key])
}

const keys = Object.keys(circle)
console.log(keys)

if ('radius' in circle)
  console.log('Circle is radius')


  function Circle(radius){
    this.radius = radius
    let defaultLoc = {x:0, y:0}
  //  let computeLoc = function (factor){
      // ...
    //}
    this.getLoc = function (){
      return defaultLoc
    }
      this.draw = function(){
      computeLoc(0.1)
      console.log('draw')
    }
    Object.defineProperty(this,'defaultLoc',
    get: function(){
      return defaultLoc
    },
    set: function(value){
      if (!value.x || !value.y)
        throw new Error('Invalid')
      defaultLoc = value
    }
  )}
  const circle = new Circle(10)
  circle.computeLoc()
  circle.defaultLoc = 1
  //circle.defaultLoc()
  circle.draw()


  function Stopwatch(){
    let startTime, endTime, running, duration = 0
    this.start = function(){
      if (running)
        throw new Error('Started')
        running = true
        startTime = new Date()
    }
    this.stop = function(){
      if (!running)
        throw new Error ('Not Started')
        running = false
        endTime = new Data
        const seconds = (endTime.getTime()-startTime.getTime()) / 1000
        duration += seconds
    }
    this.reset = function (){
      startTime = null;
      endTime = null
      running = false
      duration = 0
    }
    
    Object.defineProperty(this, 'duration'){
      })
    }
