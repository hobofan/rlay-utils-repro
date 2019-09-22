FROM rlayproject/rlay-client@sha256:7e66400b4f69bd9751ca09ed47fcae5c53b6d8cc025e7d4b52793d1a94106554

COPY rlay.config.toml .

EXPOSE 8546
