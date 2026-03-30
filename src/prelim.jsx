
fetchdata().then(data => {
  console.log(data);
}).catch(error => {
  console.error('Error fetching data:', error);
});

async function fetchdata() {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}


const newFetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const addjob = async (paramone) => {
    try {
        const response = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paramone),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return await response.json();
    } catch (error) {        console.error('Error adding job:', error);
    }
}