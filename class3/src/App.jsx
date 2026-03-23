import Card from './components/Card'

const App = () => {
  const users = [
  { name: "Aman", age: 20 },
  { name: "Riya", age: 22 },
  { name: "Karan", age: 21 },
  { name: "Sneha", age: 23 },
  { name: "Rahul", age: 24 }
];

  return (
    <div className='h-screen w-screen bg-gray-900 p-8'>
      {users.map(function(elem){
        return <Card name={elem.name} age={elem.age} />;
      })}
    </div>
  )
}

export default App