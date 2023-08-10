FROM node:16.14-alpine
WORKDIR /backend
COPY package* ./
RUN yarn install
COPY . .
EXPOSE 5000
ENTRYPOINT ["yarn", "run"]
CMD ["start"]