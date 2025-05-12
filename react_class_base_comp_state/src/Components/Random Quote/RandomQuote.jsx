import React from "react";
import './RandomQuote.css'

class RandomQuote extends React.Component{
    constructor(){
        super()
        this.state = {
            quote:"The best way to get started is to quit talking and begin doing.",
            color:"#ffffff"
        }
    }
    handleQuotes = ()=>{
        const englishQuotes = [
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Don’t watch the clock; do what it does. Keep going.",
            "Dream big and dare to fail.",
            "Your time is limited, so don’t waste it living someone else’s life.",
            "Life is what happens when you’re busy making other plans.",
            "In the end, we only regret the chances we didn’t take." ,
            "Life is either a daring adventure or nothing at all.",
            "Happiness is not something ready-made. It comes from your own actions.",
            "Difficulties in life are intended to make us better, not bitter.",
            "Success usually comes to those who are too busy to be looking for it.",
            "Opportunities don't happen. You create them.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            "Success is walking from failure to failure with no loss of enthusiasm.",
            "Don't be afraid to give up the good to go for the great.",
            "Be yourself; everyone else is already taken.",
            "Believe you can and you’re halfway there.",
            "Act as if what you do makes a difference. It does.",
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            "You don’t have to be great to start, but you have to start to be great.",
            "A real friend is one who walks in when the rest of the world walks out.",
            "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’",
            "True friendship comes when the silence between two people is comfortable.",
            "A friend is someone who knows all about you and still loves you.",
            "There is nothing on this earth more to be prized than true friendship.",
            "Friends are the family we choose for ourselves.",
            "Good friends are like stars. You don't always see them, but you know they’re always there.",
            "A single rose can be my garden… a single friend, my world.",
            "Life was meant for good friends and great adventures.",
            "Friendship isn’t a big thing—it’s a million little things.",
            "We'll be best friends forever because you already know too much.",
            "Friends buy you food. Best friends eat your food.",
            "You don’t have to be crazy to be my friend. I’ll train you.",
            "A good friend will help you move. A best friend will help you move a body.",
            "I hope we're friends until we die. Then I hope we stay ghost friends and walk through walls and scare people.",
            "Friendship is the only cement that will ever hold the world together.",
            "In the sweetness of friendship let there be laughter, and sharing of pleasures.",
            "A true friend is the greatest of all blessings.",
            "True friends are never apart, maybe in distance but never in heart.",
            "Some people go to priests; others to poetry; I to my friends."
        ]
        const quoteIndex = Math.floor(Math.random() * englishQuotes.length)
        const randomquote = englishQuotes[quoteIndex]

        let chars = "abcdef0123456789"
        let randomColor = "#"
        for (let i = 0;i<6;i++){
            const colorIndex = Math.floor(Math.random() * chars.length)
            randomColor += chars[colorIndex]
        }
        this.setState({color:randomColor, quote:randomquote})
    }
    render(){
        return (
            <div style={{backgroundColor:this.state.color}} className="p-5 flex flex-col justify-center items-center h-screen gap-8">
                <h1 className="border-4 border-double p-5 text-2xl text-white rounded-sm">{this.state.quote}</h1>
                <button onClick={this.handleQuotes} className="border-4 border-double p-4 rounded-sm hover:bg-teal-600 hover:text-white transition">Random English Quotes</button>
            </div>
        )
    }
}
export default RandomQuote