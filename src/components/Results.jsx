import { Typography, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

function Results({ search }) {
  const [currentpage, setCurrentPage] = useState(1);
  const resultsPerPage = 9;
  const indexOfLastResult = currentpage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const paginatedData = search.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  return (
    <div>
      {search && (
        <>
          <Stack direction="row"></Stack>
          <Typography
            margin={2}
            fontWeight={300}
            fontFamily="roboto"
            color={"primary"}
            variant="h5"
            align="center"
            borderBottom={"1px solid green"}
          >
            Search Results
          </Typography>
        </>
      )}
      {search &&
        paginatedData.map((item) => {
          return (
            <div>
              <Box margin={2} maxWidth={'90%'} mt={2} align="center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Typography variant="h6" color="secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2"> {item.description} </Typography>
                  <Typography color="primary"> {item.link} </Typography>
                </a>
              </Box>
            </div>
          );
        })}
      <Stack
        sx={{ backgroundColor: "white", padding: "10px" }}
        alignItems="center"
      >
        {search.length > 8 && (
          <Pagination
            variant="outlined"
            sx={{ color: "white" }}
            count={Math.ceil(search.length / resultsPerPage)}
            defaultPage={1}
            page={currentpage}
            onChange={paginate}
            size={"large"}
          />
        )}
      </Stack>
    </div>
  );
}

export default Results;
