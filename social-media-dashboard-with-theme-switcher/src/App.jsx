import './App.css'
import fbIcon from "./assets/images/icon-facebook.svg"
import twitterIcon from "./assets/images/icon-twitter.svg"
import instaIcon from "./assets/images/icon-instagram.svg"
import ytIcon from "./assets/images/icon-youtube.svg"
import { useState } from 'react'
// import upIcon from "./assets/images/icon-up.svg"
// import downIcon from "./assets/images/icon-down.svg"

function App() {
  const accounts = [
    {site: "Facebook", siteIcon: fbIcon, id: "nathanf", followers: "1987", change: 12},
    {site: "Twitter", siteIcon: twitterIcon, id: "nathanf", followers: "1044", change: 99},
    {site: "Instagram", siteIcon: instaIcon, id: "realnathanf", followers: "11k", change: 1099},
    {site: "Youtube", siteIcon: ytIcon, id: "Nathan F.", followers: "8239", change: -144}
  ]
  const overview = [
    {site: "Facebook", siteIcon: fbIcon, count: "87", title: "Profile Views", change: 3},
    {site: "Facebook", siteIcon: fbIcon, count: "52", title: "Likes", change: -2},
    {site: "Instagram", siteIcon: instaIcon, count: "5462", title: "Likes", change: 2257},
    {site: "Instagram", siteIcon: instaIcon, count: "52k", title: "Profile Views", change: 1375},
    {site: "Twitter", siteIcon: twitterIcon, count: "117", title: "Tweets", change: 303},
    {site: "Twitter", siteIcon: twitterIcon, count: "507", title: "Likes", change: 553},
    {site: "Youtube", siteIcon: ytIcon, count: "107", title: "Likes", change: -19},
    {site: "Youtube", siteIcon: ytIcon, count: "1407", title: "Total Views", change: -12}
  ]
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="main" data-theme={ isDark? "dark": "light" }>
      <header>
        <div className="head">
          <h2>Social Media Dashboard</h2>
          <p>Total Followers: 23,004</p>
        </div>
        <div className='toggle-theme'>
          <p>Dark Mode</p>
          <label className="switch">
            <input type="checkbox" id="toggle-switch" checked={isDark} onClick={() => setIsDark(!isDark)}/>
            <span className='slider round'></span>
          </label>
        </div>
      </header>
      <div className="accounts">
        { accounts.map((account) => (
            <div className="account-card" key={account.index}>
              <div className="handle">
                <img src={account.siteIcon} alt={account.site + " icon"} />
                <p>{ "@" + account.id }</p>
              </div>
              <div className="followers">
                <h1 className='follower-count'>{ account.followers }</h1>
                <p>FOLLOWERS</p>
              </div>
              { account.change < 0 ?
                <div className="decrease"><i></i>{ Math.abs(account.change) } Today</div> :
                <div className="increase"><i></i>{ account.change } Today</div>
              }
            </div>
          ))
        }
      </div>
      <h3 id='overview-heading'>Overview - Today</h3>
      <div className="overview">
        { overview.map((data) => (
            <div className="overview-card" key={data.index}>
              <div className='top'>
                <img src={data.siteIcon} alt={data.site + " icon"} />
                <p>{data.title }</p>
              </div>
              <div className='bottom'>
                <h2>{data.count}</h2>
                { data.change < 0 ?
                  <div className="decrease"><i></i>{ Math.abs(data.change) }%</div> :
                  <div className="increase"><i></i>{ data.change }%</div>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
