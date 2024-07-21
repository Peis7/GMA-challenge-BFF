
.PHONY: rebuild
rebuild:
	docker-compose up -d --build

.PHONY: start
start:  
	_start_api _start_db

.PHONY: stop
stop:   
	docker-compose down

_start_api: 
	docker-compose up -d  api

_start_db:  
	docker-compose up -d db