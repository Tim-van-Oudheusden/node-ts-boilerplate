echo "Setting up directories"
cd ../
mkdir ./.config
mkdir ./.config/certs
mkdir ./.config/certs/https
echo "Installing NPM Certificate manager"
npm install -g mkcert
echo "Downloading HTTPS certificates"
mkcert create-ca
mkcert create-cert
mkcert
mv ca.crt ./.config/certs/https
mv ca.key ./.config/certs/https
mv cert.crt ./.config/certs/https
mv cert.key ./.config/certs/https