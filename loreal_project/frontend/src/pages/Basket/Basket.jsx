import React, { useState } from "react";
import Count from "../../components/Count/Count";
import "./Basket.scss";

function Basket() {
  const [isChecked, setIsChecked] = useState(false);

  const [individualCheckboxes, setIndividualCheckboxes] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [articleCounts, setArticleCounts] = useState([1, 1, 1, 1]);

  const handleMasterCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIndividualCheckboxes(
      Array.from({ length: articleCounts.length }, () => !isChecked)
    );
  };

  const handleIndividualCheckboxChange = (index) => {
    const updatedCheckboxes = [...individualCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setIndividualCheckboxes(updatedCheckboxes);
    setIsChecked(updatedCheckboxes.every((checkbox) => checkbox));
  };

  const handleAddArticle = (index) => {
    const updatedCounts = [...articleCounts];
    updatedCounts[index] += 1;
    setArticleCounts(updatedCounts);
  };

  const handleRemoveArticle = (index) => {
    if (articleCounts[index] > 1) {
      const updatedCounts = [...articleCounts];
      updatedCounts[index] -= 1;
      setArticleCounts(updatedCounts);
    }
  };

  const displayImg = (int) => {
    switch (int) {
      case 0:
        return "src/assets/haircolor2.png";
        break;
      case 1:
        return "src/assets/skincare2.png";
        break;
      case 2:
        return "src/assets/shampoo2.png";
        break;
      case 3:
        return "src/assets/makeup2.png";
        break;
      default:
        return "src/assets/logogold.png";
        break;
    }
  };

  return (
    <div className="ctn">
      <p className="cou"> 🐐 🐐 🐐</p>
      <h1 className="title1">Basket</h1>
      <h2 className="title2">
        All articles
        <label>
          <input
            type="checkbox"
            className="checkbox-master"
            checked={isChecked}
            onChange={handleMasterCheckboxChange}
          />
        </label>
      </h2>
      <div className="allarticlecheck">
        <div className="checkbox-group">
          {individualCheckboxes.map((checkbox, index) => {
            return (
              <div key={index} className="article-container">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox-item"
                    checked={individualCheckboxes[index]}
                    onChange={() => handleIndividualCheckboxChange(index)}
                  />
                  Article {index + 1}
                </label>
                <img src={displayImg(index)} alt={`Image Article `} />
                <Count />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Basket;
