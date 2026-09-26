import os
import glob
import re

images = {
    "DirectTaxClient.tsx": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    "IntlTaxClient.tsx": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
    "TransferPricingClient.tsx": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    "GSTClient.tsx": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",
    "ExpatriatesClient.tsx": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",
    "AssuranceClient.tsx": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop",
    "LitigationClient.tsx": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
    "ValuationClient.tsx": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    "MAClient.tsx": "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2000&auto=format&fit=crop",
    "IndiaEntryClient.tsx": "https://images.unsplash.com/photo-1524869879029-cb611f71dfb1?q=80&w=2000&auto=format&fit=crop",
}

base_dir = "/Users/abhishek/Desktop/vcmv/app/services"

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith("Client.tsx") and file != "ServicesPageClient.tsx":
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
                
            if "imageSrc=" not in content:
                img_url = images.get(file, "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop")
                
                # Replace <ServicePageLayout with <ServicePageLayout imageSrc="..."
                # We need to make sure we don't accidentally replace the import statement.
                new_content = re.sub(
                    r'<ServicePageLayout',
                    f'<ServicePageLayout\n      imageSrc="{img_url}"',
                    content,
                    count=1
                )
                
                with open(path, "w") as f:
                    f.write(new_content)
                print(f"Updated {file}")
