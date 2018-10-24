import moment from "moment";

export default function getPostAge(s) {
  const ms = Number(s + "000");
  const timestamp = new Date(ms);
  const date = timestamp.toLocaleDateString().replace(/\D+/g, '-');
  const time = timestamp.toLocaleTimeString();

  return moment(`${date} ${time}`, "MM-DD-YYYY hh:mm:ss a").fromNow();
} 

export const urls = [
  "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty",
  "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty", 
  "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty",
  "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty",
  "https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty", 
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", 
];

export function shortUrl(str) {
  return `(${str.split('.')[1]}.com)`;
}
