// To store and then update the information in html with the assigned id
const Conatiner= document.getElementById('Container')
const Quote= document.getElementById('Quote')
const Author= document.getElementById('Author')

// function to get the random quote from API
async function get_quote() {
  
  //to try to get the quote from API and if theres any error then to catch the error and display it.
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data=await response.json(); 
        Quote.textContent=data.content;
        Author.textContent = `- ${data.author}`;
    }  
    catch(error){
        console.error('Error fetching quote:',error);
    }
}

get_quote();
