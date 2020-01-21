const fetch = require ('node-fetch')

const accreditamento = () => { fetch('http://192.168.1.231:8080', {
    method : 'POST',
    body : JSON.stringify({
      nome : 'Michelangelo Stasi'
    }),
    headers : {
      'content-type' : 'application/JSON'
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(console.log)
}

const es = (n) => { fetch(`http://192.168.1.231:8080/${n}`, {
  method : 'GET',
  headers : {'x-data' : 'true'}
  })
  .then(res => res.json())
  .then (({message, data}) => {
    console.log(message, data)
    return data
  })
  .then(data => {
    soluzione(data)
    fetch(`http://192.168.1.231:8080/${n}`, {
      method : 'POST',
      body : JSON.stringify({
        data
      }),
      headers : {
      'content-type' : 'application/JSON'
    }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.log)
  })
  .catch(console.log)
}

const soluzione = ( data) => {
  data.map()
  data.reduce()
  data.filter()
  data.forEach()

}
es(1)