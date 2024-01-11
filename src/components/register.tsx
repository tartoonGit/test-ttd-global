import "./register.css";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Button } from "src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "src/components/ui/dialog";
import { Textarea } from "src/components/ui/textarea";
import countries_json from "./../data/countries.json";
import thai_amphures from "./../data/thai_amphures.json";
import thai_provinces from "./../data/thai_provinces.json";
import thai_tambons from "./../data/thai_tambons.json";
import Icon from "@mdi/react";
import { mdiEyeOutline, mdiDeleteOutline } from "@mdi/js";
import { useState } from "react";

const Register = () => {
  const countries = countries_json;
  const tambons = thai_tambons;
  const amphures = thai_amphures;
  const provinces = thai_provinces;

  const [province, setProvince] = useState<string>("");
  const [provinceID, setProvinceID] = useState<number>(0);
  const handleProvinceChange = (name: string) => {
    setProvince(name);
    const selectedProvince = provinces.find(
      (p) => p.name_th === name || p.name_en === name
    );
    setProvinceID(selectedProvince ? selectedProvince.id : 0);
  };

  const [district, setDistrict] = useState("");
  const [districtID, setDistrictID] = useState<number>(0);
  const handleDistrictChange = (name: string) => {
    setDistrict(name);
    const selectedDistrict = amphures.find(
      (p) => p.name_th === name || p.name_en === name
    );
    setDistrictID(selectedDistrict ? selectedDistrict.id : 0);
  };

  const [subDistrict, setSubDistrict] = useState("");
  const [zipCode, setZipCode] = useState("");
  const handleSubDistrictChange = (name: string) => {
    setSubDistrict(name);
    const selectedSubDistrict = tambons.find(
      (p) => p.name_th === name || p.name_en === name
    );
    setZipCode(selectedSubDistrict ? String(selectedSubDistrict.zip_code) : "");
  };

  const [avatarSrc, setAvatarSrc] = useState("");
  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setAvatarSrc(fileUrl);
    }
  };

  return (
    <>
      <div className="border border-gray-100 rounded-2xl drop-shadow-lg max-w-7xl w-full flex flex-col items-center">
        {/* upload logo */}
        <Avatar
          className={`${
            !avatarSrc && "cursor-pointer"
          } w-[150px] h-[150px] mt-[35px] mb-6`}
          onClick={() => !avatarSrc && document.getElementById("file")?.click()}
        >
          <AvatarImage className="object-cover" src={avatarSrc || ""} />
          {avatarSrc && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Dialog>
                <DialogTrigger>
                  <Icon
                    path={mdiEyeOutline}
                    size={1.5}
                    className="text-[#cccccc] cursor-pointer mr-2"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                   <img src={avatarSrc} />
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <div onClick={() => setAvatarSrc("")}>
                <Icon
                  path={mdiDeleteOutline}
                  size={1.5}
                  className="text-[#cccccc] cursor-pointer ml-2"
                />
              </div>
            </div>
          )}
          <AvatarFallback className="bg-inherit border border-[#021E42]">
            <img src="/public/icons/upimage.svg"></img>
          </AvatarFallback>
          <Input
            className="hidden"
            id="file"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleAvatarUpload}
          />
        </Avatar>

        {/* input Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12">
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Label className="text-base font-normal" htmlFor="email">
              Email
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/public/icons/email.svg"></img>
              </div>
              <Input
                className="pl-12 placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                id="email"
                placeholder="Enter your Email"
                type="email"
              />
            </div>
          </div>
          {/* input Password */}
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Label className="text-base font-normal" htmlFor="password">
              Password
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/public/icons/password.svg"></img>
              </div>
              <Input
                className="pl-12 placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>
          {/* input Confirmed Password */}
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Label className="text-base font-normal" htmlFor="confirm_password">
              Confirmed Password
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/public/icons/password.svg"></img>
              </div>
              <Input
                className="pl-12 placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                id="confirm_password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>
        </div>
        <hr className="my-8 w-10/12" />
        {/* Information Section */}
        <div className="w-10/12 mb-6">
          <div className="text-xl font-semibold text-[#255FA8]">
            Information
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-2">
            {/* input Company Name */}
            <div className="grid gap-1.5">
              <Label className="text-base font-normal" htmlFor="company_name">
                Company Name
              </Label>
              <Input
                className="placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                id="company_name"
                placeholder="Enter company name"
                type="text"
              />
            </div>
            {/* input Tax ID */}
            <div className="grid gap-1.5">
              <Label className="text-base font-normal" htmlFor="tax_id">
                Tax ID
              </Label>
              <Input
                className="placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                id="tax_id"
                placeholder="Enter Tax ID"
                type="text"
              />
            </div>
            {/* input Full Name */}
            <div className="grid gap-1.5">
              <Label className="text-base font-normal" htmlFor="full_name">
                Full Name
              </Label>
              <Input
                className="placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                id="full_name"
                placeholder="Enter Full name"
                type="text"
              />
            </div>
            {/* Select Country */}
            <div className="grid gap-1.5">
              <Label className="text-base font-normal" htmlFor="country">
                Country
              </Label>
              <Select defaultValue="TH">
                <SelectTrigger className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((item, index) => (
                    <SelectItem key={index} value={item.code}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* input Phone Number */}
            <div className="grid gap-1.5">
              <Label className="text-base font-normal" htmlFor="phone_number">
                Phone Number
              </Label>
              <div className="flex">
                <Select defaultValue="+66">
                  <SelectTrigger className="w-[93px] mr-2 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((item, index) => (
                      <SelectItem key={index} value={item.dial_code}>
                        {item.dial_code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  className="flex-1 placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                  id="phone_number"
                  placeholder="Enter Phone number"
                  type="tel"
                />
              </div>
            </div>
            {/* input Website */}
            <div className="grid gap-1.5">
              <Label className="text-base font-normal" htmlFor="website">
                Website
              </Label>
              <Input
                className="placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                id="website"
                placeholder="Enter website"
                type="url"
              />
            </div>
            {/* Textarea Address */}
            <div className="grid w-full gap-1.5">
              <Label className="text-base font-normal" htmlFor="message">
                Address
              </Label>
              <Textarea
                className="placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc] min-h-[136px] resize-none"
                placeholder="Enter Address"
                id="message"
              />
            </div>
            {/* Select State/Province */}
            <div className="grid grid-rows-2 gap-y-[18px]">
              <div className="grid gap-1.5">
                <Label className="text-base font-normal" htmlFor="country">
                  State/Province
                </Label>
                <Select value={province} onValueChange={handleProvinceChange}>
                  <SelectTrigger className="text-lg">
                    <SelectValue placeholder="Choose Province" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((item, index) => (
                      <SelectItem key={index} value={item.name_th}>
                        {item.name_th} / {item.name_en}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Select City/District */}
              <div className="grid gap-1.5">
                <Label className="text-base font-normal" htmlFor="country">
                  City/District
                </Label>
                <Select value={district} onValueChange={handleDistrictChange}>
                  <SelectTrigger className="text-lg" disabled={province == ""}>
                    <SelectValue placeholder="Choose Sub-District" />
                  </SelectTrigger>
                  <SelectContent>
                    {amphures
                      .filter((data) => data.province_id === provinceID)
                      .map((item, index) => (
                        <SelectItem key={index} value={item.name_en}>
                          {item.name_th} / {item.name_en}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Select Sub-District */}
            <div className="grid grid-rows-2 gap-y-[18px]">
              <div className="grid gap-1.5">
                <Label className="text-base font-normal" htmlFor="country">
                  Sub-District
                </Label>
                <Select
                  value={subDistrict}
                  onValueChange={handleSubDistrictChange}
                >
                  <SelectTrigger className="text-lg" disabled={district == ""}>
                    <SelectValue placeholder="Choose District" />
                  </SelectTrigger>
                  <SelectContent>
                    {tambons
                      .filter((data) => data.amphure_id === districtID)
                      .map((item, index) => (
                        <SelectItem key={index} value={item.name_en}>
                          {item.name_th} / {item.name_en}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              {/* input Zip Code */}
              <div className="grid gap-1.5">
                <Label className="text-base font-normal" htmlFor="zipcode">
                  Zip Code
                </Label>
                <Input
                  disabled
                  className="placeholder:text-lg placeholder:font-normal placeholder:text-[#cccccc]"
                  id="zipcode"
                  placeholder="Enter Zip Code"
                  type="text"
                  value={zipCode}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between w-10/12 my-6">
          <Link to="/">
            <Button className="rounded-3xl text-xl w-[160px] h-12 bg-[#021E42]">
              Cancel
            </Button>
          </Link>
          <Button className="rounded-3xl text-xl w-[160px] h-12 bg-[#5FC198]">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Register;
