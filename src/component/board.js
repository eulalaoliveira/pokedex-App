import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Board () {

    return (
		<section id="news">
            <div class="news-text">
                <h2> GO BATTLE LEAGUE</h2>
                <p>RANKINGS | SEASON 9</p>
            </div>

            <div class="news-img">
                <img alt="news" url="https://pokemonblog.com/2020/04/11/everything-you-need-to-know-about-the-go-battle-league-leaderboard-for-pokemon-go/"/>	
            </div>

            <div class="news-text">
            <Link to="/"><button>More</button></Link>
            </div>
        </section>
    );
}