package main

import (
	"net/http"

	"github.com/rs/cors"
)

func main() {
	mux := http.NewServeMux()

	//define API handlers here

	corsHandler := cors.Default().Handler(mux)

	http.ListenAndServe(":8000", corsHandler)
}
