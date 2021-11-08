FROM node:12.16.2 as builder

COPY . /app

WORKDIR /app

RUN yarn -v

RUN yarn --ignore-optional

RUN yarn run build


# Ngnix
FROM nginx:latest

# Make /var/cache/nginx/ writable by non-root users
RUN chgrp nginx /var/cache/nginx/
RUN chmod -R g+w /var/cache/nginx/

# Write the PID file to a location where regular users have write access.
RUN sed --regexp-extended --in-place=.bak 's%^pid\s+/var/run/nginx.pid;%pid /var/tmp/nginx.pid;%' /etc/nginx/nginx.conf

COPY --from=builder /app/build /var/www
RUN chgrp nginx /var/www
RUN chmod -R g+w /var/www

USER nginx
