import React, { useEffect, useState } from "react";
import { Card, Grid, Button, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { cateList } from "../../Api/Api";

const defaultTheme = createTheme();

export default function CategoryList() {
  const navigate = useNavigate();
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    const listCat = async () => {
      try {
        const res = await cateList();
        setListCategory(res.data.business_details);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };
    listCat();
  }, []);

  const handleClick = (label) => {
    // Modify this according to how you want to handle the click event
    navigate(`/user3/${label.toLowerCase().replace(/ /g, "")}`);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container sx={{ py: 5 }} maxWidth="lg">
        <Grid container spacing={4}>
          {listCategory.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <img
                  src={category.image}
                  alt={category.b_category}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                  onClick={() => handleClick(category.b_category)}
                />
                <Button
                  sx={{ color: "black" }}
                  onClick={() => handleClick(category.b_category)}
                >
                  {category.b_category}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
