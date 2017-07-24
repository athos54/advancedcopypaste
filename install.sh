apt-get install xclip
mkdir /usr/bin/advancedCopyPaste
cp -rv * /usr/bin/advancedCopyPaste
ln -s /usr/bin/advancedCopyPaste/advancedCopyPasteRun.sh /usr/bin/acprun
chmod +x /usr/bin/acprun