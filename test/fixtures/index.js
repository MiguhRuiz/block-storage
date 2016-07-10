const fixtures = {
  getVolumes () {
    return {
      "volumes": [
          {
              "id": "9d3920c5-33b2-11e6-af2d-000f53315821",
              "region": {
                "name": "New York 1",
                "slug": "nyc1",
                "sizes": [
                    "512mb",
                    "8gb",
                    "16gb",
                    "32gb",
                    "48gb",
                    "64gb",
                    "1gb",
                    "2gb",
                    "4gb"
                ],
                "features": [
                    "private_networking",
                    "backups",
                    "ipv6",
                    "metadata",
                    "storage"
                ],
                "available": true
              },
              "droplet_ids": [],
              "name": "drive-nyc1-01",
              "description": "",
              "size_gigabytes": 100,
              "created_at": "2016-06-16T11:08:11Z"
            }
          ],
          "links": {},
          "meta": {
            "total": 1
          }
        }
      },

  getVolume() {
    return {
      "volume": {
          "id": "9d3920c5-33b2-11e6-af2d-000f53315821",
          "region": {
            "name": "New York 1",
            "slug": "nyc1",
            "sizes": [
                "512mb",
                "8gb",
                "16gb",
                "32gb",
                "48gb",
                "64gb",
                "1gb",
                "2gb",
                "4gb"
            ],
            "features": [
                "private_networking",
                "backups",
                "ipv6",
                "metadata",
                "storage"
            ],
            "available": true
        },
        "droplet_ids": [],
        "name": "drive-nyc1-01",
        "description": "",
        "size_gigabytes": 100,
        "created_at": "2016-06-16T11:08:11Z"
      }
    }
  }
}

module.exports = fixtures
