import './App.css';
import Button from './Button.js'
function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <div className='buttons-container'>
          <div className='button-wrapper'>
            <span>{'<Button/>'}</span>
            <Button/>
        </div>
        <div className='button-row-2'>
            <span>{'<Button variant="outline"/>'}</span>
          <Button variant="outline"/>
        </div>
        <div className='button-wrapper'>
            <span>{'<Button variant="text"/>'}</span>
          <Button variant="text"/>
        </div>
        <div className='button-wrapper'>
            <span>{'<Button disableShadow/>'}</span>
          <Button color="primary" disableShadow/>
        </div>
        <div className='button-row-2'>
          <div className='button-wrapper'>
            <span>{'<Button disabled/>'}</span>
            <Button disabled/>
          </div>
          <div className='button-wrapper'>
            <span>{'<Button variant="text" disabled/>'}</span>
            <Button variant="text" disabled/>            
          </div>
        </div>
        <div className='button-row-2'>
          <div className='button-wrapper'>
              <span>{'<Button startIcon="local_grocery_store"/>'}</span>
            <Button startIcon="local_grocery_store" color="primary"/>
          </div>
          <div className='button-wrapper'>
              <span>{'<Button endIcon="local_grocery_store"/>'}</span>
            <Button endIcon="local_grocery_store" color="primary"/>
          </div>
        </div>
        
        <div className='button-row-2'>
          <div className='button-wrapper'>
              <span>{'<Button size="sm"/>'}</span>
            <Button color="primary" size="sm"/>
          </div>
          <div className='button-wrapper'>
              <span>{'<Button size="md"/>'}</span>
            <Button color="primary" size="md"/>
          </div>
          <div className='button-wrapper'>
              <span>{'<Button size="lg"/>'}</span>
            <Button color="primary" size="lg"/></div>
          </div>
        </div>
        <div className='button-row-2'>
          <div className='button-wrapper'>
              <span>{'<Button color="default"/>'}</span>
            <Button color="default"/>
          </div>
          <div className='button-wrapper'>
              <span>{'<Button color="primary"/>'}</span>
            <Button color="primary"/></div>
          <div className='button-wrapper'>
              <span>{'<Button color="secondary"/>'}</span>
            <Button color="secondary"/></div>
          <div className='button-wrapper'>
              <span>{'<Button color="danger"/>'}</span>
            <Button color="danger"/>
          </div>
        </div>
       
      </div>
      
  );
}

export default App;
