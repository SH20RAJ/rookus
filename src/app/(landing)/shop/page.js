"use client";
import React, { useState } from "react";
import styled from "styled-components";

export default function Page() {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 4000],
    rating: "",
  });

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      category: checked
        ? [...prev.category, value]
        : prev.category.filter((cat) => cat !== value),
    }));
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [e.target.min, e.target.max],
    }));
  };

  const handleRatingChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      rating: e.target.value,
    }));
  };

  const filteredItems = applyFilters(filters);

  return (
    <Container>
      <Sidebar>
        <h3>Filters</h3>
        <div className="filter-section">
          <h4>Category</h4>
          <label>
            <input
              type="checkbox"
              value="Tshirts"
              onChange={handleCategoryChange}
            />
            Tshirts
          </label>
          <label>
            <input
              type="checkbox"
              value="Jackets"
              onChange={handleCategoryChange}
            />
            Jackets
          </label>
          <label>
            <input
              type="checkbox"
              value="Hoodies"
              onChange={handleCategoryChange}
            />
            Hoodies
          </label>
          <label>
            <input
              type="checkbox"
              value="Varsity"
              onChange={handleCategoryChange}
            />
            Varsity
          </label>
          <label>
            <input
              type="checkbox"
              value="Tote bags"
              onChange={handleCategoryChange}
            />
            Tote Bags
          </label>
        </div>

        <div className="filter-section">
          <h4>Price</h4>
          <input
            type="range"
            min="0"
            max="4000"
            value={filters.priceRange}
            onChange={handlePriceChange}
          />
          <p>
            Price Range: Rs{filters.priceRange[0]} - Rs{filters.priceRange[1]}
          </p>
        </div>

        <div className="filter-section">
          <h4>Rating</h4>
          <select value={filters.rating} onChange={handleRatingChange}>
            <option value="">Select Rating</option>
            <option value="4">4 stars & above</option>
            <option value="3">3 stars & above</option>
            <option value="2">2 stars & above</option>
            <option value="1">1 star & above</option>
          </select>
        </div>
      </Sidebar>

      <MainContent>
        {filteredItems.length > 0 ? (
          <Grid>
            {filteredItems.map((item) => (
              <Card key={item.id}>
                <ImageWrapper>
                  <img src={item.imageUrl} alt={item.name} />
                </ImageWrapper>
                <CardInfo>
                  <h4>{item.name}</h4>
                  <p>Category: {item.category}</p>
                  <p>Price: Rs{item.price}</p>
                  <p>Rating: {item.rating} stars</p>
                  <ButtonContainer>
                    <Button>Buy Now</Button>
                    <Button>Add to Cart</Button>
                  </ButtonContainer>
                </CardInfo>
              </Card>
            ))}
          </Grid>
        ) : (
          <p>No items match your filter criteria.</p>
        )}
      </MainContent>
    </Container>
  );
}

const applyFilters = (filters) => {
  const items = [
    {
      id: 1,
      name: "Anime T-shirt",
      category: "Tshirts",
      price: 500,
      rating: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Anime+Tshirt",
    },
    {
      id: 2,
      name: "Jacket",
      category: "Jackets",
      price: 2000,
      rating: 5,
      imageUrl: "https://via.placeholder.com/300x300?text=Jacket",
    },
    {
      id: 3,
      name: "Hoodie",
      category: "Hoodies",
      price: 1000,
      rating: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Hoodie",
    },
    {
      id: 4,
      name: "Tote Bag",
      category: "Tote bags",
      price: 300,
      rating: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Tote+Bag",
    },
    {
      id: 5,
      name: "Varsity Jacket",
      category: "Varsity",
      price: 2500,
      rating: 5,
      imageUrl: "https://via.placeholder.com/300x300?text=Varsity+Jacket",
    },
    {
      id: 6,
      name: "Printed T-shirt",
      category: "Tshirts",
      price: 550,
      rating: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Printed+Tshirt",
    },
    {
      id: 7,
      name: "Puffer Jacket",
      category: "Jackets",
      price: 3200,
      rating: 5,
      imageUrl: "https://via.placeholder.com/300x300?text=Puffer+Jacket",
    },
    {
      id: 8,
      name: "Graphic Hoodie",
      category: "Hoodies",
      price: 1200,
      rating: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Graphic+Hoodie",
    },
    {
      id: 9,
      name: "Canvas Tote",
      category: "Tote bags",
      price: 450,
      rating: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Canvas+Tote",
    },
    {
      id: 10,
      name: "Anime Varsity",
      category: "Varsity",
      price: 2800,
      rating: 5,
      imageUrl: "https://via.placeholder.com/300x300?text=Anime+Varsity",
    },
  ];

  return items.filter((item) => {
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(item.category);
    const matchesPrice =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    const matchesRating =
      filters.rating === "" || item.rating >= parseInt(filters.rating);

    return matchesCategory && matchesPrice && matchesRating;
  });
};

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #1a1a1a;
  color: #f5f5f5;
`;

const Sidebar = styled.div`
  width: 300px;
  padding: 20px;
  background: #333;
  border-right: 1px solid #444;
  position: sticky;
  top: 0;
  height: 100vh;

  h3 {
    margin-bottom: 20px;
    color: #ffcc00;
  }

  .filter-section {
    margin-bottom: 20px;
  }

  h4 {
    color: #ffcc00;
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }

  input[type="range"] {
    width: 100%;
    margin-top: 10px;
    background: #444;
    color: #ffcc00;
  }

  select {
    width: 100%;
    padding: 5px;
    background: #444;
    color: #fff;
    border: 1px solid #666;
  }

  p {
    margin-top: 10px;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Increased minimum width to 400px */
  gap: 50px;
`;
const Card = styled.div`
  background: linear-gradient(to right, #434343 0%, black 100%);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  padding: 20px;
  background: #1f1f1f; /* Dark background for better contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  
  h1 {
    margin: 20px 0;
    color: #2596be; 
    font-family: 'Poppins', sans-serif; 
    font-size: 2.5em;
    line-height: 1.4; 

  p {
    margin: 5px 0; 
    color: #e0e0e0; 
    font-family: 'Poppins', sans-serif; 
    font-size: 5em;
    line-height: 1.5; 
`;


const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between; /* Aligns buttons in a row with space between */
`;

const Button = styled.button`
  background-color: #7828c8" /* Original background color */
  color: black; /* Original text color */
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;

  &:hover {
    background-color: transparent; /* Ghost theme background */
    color: #BEF264; /* Change text color to match the original background */
    border: 2px solid #BEF264; /* Add border for the ghost effect */
    box-shadow: 0 0 10px #BEF264, 0 0 20px #BEF264; /* Glow effect */
  }
`
