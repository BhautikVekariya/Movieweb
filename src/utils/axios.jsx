import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3/",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2FjNGY1OTkxMWY5MDhiOThhODEwMDMwZTRkMzg0YyIsIm5iZiI6MTc1NzIyMjA3NC42MjQsInN1YiI6IjY4YmQxNGJhYjFkYmQwZjRhNjhjZWJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unl_oxzY9Zvuz6ibVXZL6LhW1cfMyqitAzPgQJCz6cY'
        }
    }
)

export default instance