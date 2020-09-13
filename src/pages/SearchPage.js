import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../useGoogleSearch"; //LIVE
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcono from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
//   const {data} = useGoogleSearch(term)   //LIVE
  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option ">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcono />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__results">
        <p className="searchPage__resultCount">
          About {data?.searchInformation.formattedTotalResults} results (
          {data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>
        {data?.items.map((item) => (
          <div className="searchPage__result">
            <a href={item.link}>
              {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img
                className="searchPage__resultImage"
                src={item.pagemap?.cse_image[0]?.src}
                alt={item.pagemap?.cse_image[0]?.src}
              />
              )}
              {item.displayLink}
            </a>
            <a className="searchPage__resultTitle" href={item.link}>
              <h2>{item.title}</h2>
              <ArrowDropDownIcon />
            </a>
            <p className="searchPage__resultSnippet">{item.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
