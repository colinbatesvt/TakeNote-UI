FROM node:18-alpine
WORKDIR /app/
COPY public /app/public
COPY src /app/src
COPY resources /app/resources
COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]