from node:8-alpine
ARG PORT
ENV PORT ${PORT}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["npm", "start"]
