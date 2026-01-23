.PHONY: all build serve clean deps lint format

# Default target
all: build

# Install dependencies
deps:
	npm install

# Build the static site
build: deps
	hugo --gc --minify

# Run the development server (accessible via local network IP)
SERVER_IP ?= $(shell hostname -I | awk '{print $$1}')
PORT ?= 1313

serve: deps
	@echo "Serving on http://$(SERVER_IP):$(PORT)"
	hugo server -D --bind 0.0.0.0 --baseURL http://$(SERVER_IP):$(PORT)

# Clean build artifacts
clean:
	rm -rf public resources

# Check code formatting
lint:
	npx prettier --check .

# Fix code formatting
format:
	npx prettier --write .
