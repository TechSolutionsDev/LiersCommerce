FROM node:16.14-alpine
WORKDIR /frontend
COPY package* ./
RUN yarn install
COPY . .
EXPOSE 3000
ENTRYPOINT ["yarn", "run"]
CMD ["start"]