FROM node:16.14-alpine
WORKDIR /backend
COPY package* ./
RUN npm install
COPY . .
EXPOSE 5000
ENTRYPOINT ["npm", "run"]
CMD ["start"]