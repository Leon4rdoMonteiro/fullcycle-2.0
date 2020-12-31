FROM nginx:latest

RUN apt-get update && \
    apt install vim -y

COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]