using System.Runtime.Serialization;

namespace Shared.Enums;

public enum HouseType
{
    Apartment,
    Radhus,
    [EnumMember(Value = "Villa/Hus")] 
    VillaHus,
    Company
}