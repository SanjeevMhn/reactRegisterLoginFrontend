import React,{useState} from 'react';

const App = () => {
	const [add,setAdd] = useState(0);
	return (
		<>
			<h2 className="hello">
				Hello My name is Jermey!!
				{add}
			</h2>
			<button className="add-btn" onClick={() => setAdd((add) => add + 1)}>
					Click me!
			</button>
		</>
	
	)

}

export default App;
