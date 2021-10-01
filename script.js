const input = document.getElementById('fruit');
const button = document.getElementById('submit');
const targetnode = document.getElementById('myList');


button.addEventListener('click', add);

function add (){
  const li = document.createElement('li');
  const text = input.value;
  li.appendChild(document.createTextNode(text));
  targetnode.appendChild(li);
}

// Mutation Observer

const config = {
  attributes: true,
  childList: true,
  subtree: true,
}

const observer = new MutationObserver(function(mutationList, observer){
  for(const mutation of mutationList){
    if(mutation.type === 'childList'){
      console.log('Child added or removed');
    }else if (mutation.type === 'attributes'){
      console.log(`The ${mutation.attributeName} atribute was modified.`)
    }
  }
});

observer.observe(targetnode, config);